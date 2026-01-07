import ArrowBack from "@/assets/icons/ArrowBack";
import ThemedScrollView from "@/components/ui/ThemedScrollView";
import ThemedText from "@/components/ui/ThemedText";
import { ThemedView } from "@/components/ui/ThemedView";
import { Ionicons } from "@expo/vector-icons";
import { useRouter } from "expo-router";
import React, { useState } from "react";
import {
  Modal,
  Pressable,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";

interface Note {
  id: number;
  date: string;
  name: string;
  status: "Pending" | "Approved";
  description: string;
  editable?: boolean;
}

const initialNotes: Note[] = [
  {
    id: 1,
    date: "Feb 15, 2024",
    name: "Sarah Johnson",
    status: "Pending",
    description:
      "Patient showed improvement in mobility exercises. Completed all scheduled activities and maintained positive attitude throughout the session.",
    editable: true,
  },
  {
    id: 2,
    date: "Feb 14, 2024",
    name: "Michael Brown",
    status: "Approved",
    description:
      "Medication administered on schedule. Blood pressure readings normal. Patient reported feeling well after afternoon walk.",
  },
];

const ClientNotePage = () => {
  const router = useRouter();
  const [filter, setFilter] = useState<"All" | "Pending" | "Approved">("All");
  const [showModal, setShowModal] = useState(false);
  const [noteText, setNoteText] = useState("");
  const [notes, setNotes] = useState(initialNotes);
  const [selectedNote, setSelectedNote] = useState<Note | null>(null);

  const filteredNotes =
    filter === "All" ? notes : notes.filter((note) => note.status === filter);

  const handleSaveNote = () => {
    if (selectedNote) {
      // Editing existing note
      setNotes((prev) =>
        prev.map((n) =>
          n.id === selectedNote.id ? { ...n, description: noteText } : n
        )
      );
    } else {
      // Adding new note
      const newNote: Note = {
        id: notes.length + 1,
        date: new Date().toDateString(),
        name: "John Doe",
        status: "Pending",
        description: noteText,
        editable: true,
      };
      setNotes((prev) => [newNote, ...prev]);
    }

    setShowModal(false);
    setSelectedNote(null);
    setNoteText("");
  };

  return (
    <ThemedView safe className="flex-1 bg-white px-4">
      {/* Header */}
      <ThemedView className="flex-row justify-between items-center py-4 border-b border-gray-200">
        <ThemedView className="flex-row gap-4">
          <TouchableOpacity onPress={() => router.back()}>
            <ArrowBack />
          </TouchableOpacity>
          <ThemedText className="text-xl font-bold text-black">
            Client Notes
          </ThemedText>
        </ThemedView>
        <Ionicons name="filter-outline" size={24} color="#374151" />
      </ThemedView>

      {/* Tabs */}
      <ThemedView className="flex-row gap-3 mt-4">
        {["All", "Pending", "Approved"].map((tab) => (
          <Pressable
            key={tab}
            onPress={() => setFilter(tab as any)}
            className={`px-4 py-2 rounded-full ${
              filter === tab ? "bg-green-100" : "bg-gray-100"
            }`}
          >
            <ThemedText
              className={`font-medium ${
                filter === tab ? "text-green-700" : "text-gray-600"
              }`}
            >
              {tab} Notes
            </ThemedText>
          </Pressable>
        ))}
      </ThemedView>

      {/* Notes List */}
      <ThemedScrollView
        showsVerticalScrollIndicator={false}
        className="mt-4 flex-1"
        contentContainerStyle={{ paddingBottom: 100 }}
      >
        {filteredNotes.map((note) => (
          <View
            key={note.id}
            className="bg-white border border-gray-200 rounded-lg p-4 mb-3 shadow-sm"
          >
            <View className="flex-row justify-between items-center mb-1">
              <ThemedText className="text-sm text-gray-500">
                {note.date}
              </ThemedText>
              <View
                className={`px-3 py-1 rounded-full ${
                  note.status === "Pending" ? "bg-green-100" : "bg-gray-100"
                }`}
              >
                <ThemedText
                  className={`text-xs font-medium ${
                    note.status === "Pending"
                      ? "text-green-700"
                      : "text-gray-600"
                  }`}
                >
                  {note.status}
                </ThemedText>
              </View>
            </View>

            <ThemedText className="font-bold text-base text-black mb-1">
              {note.name}
            </ThemedText>

            <ThemedText className="text-gray-700 text-base leading-5">
              {note.description}
            </ThemedText>

            {note.editable && (
              <Pressable
                className="mt-2"
                onPress={() => {
                  setSelectedNote(note);
                  setNoteText(note.description);
                  setShowModal(true);
                }}
              >
                <ThemedText className="text-green-600 text-[15px] font-medium">
                  ✎ Edit Note
                </ThemedText>
              </Pressable>
            )}
          </View>
        ))}
      </ThemedScrollView>

      {/* Add Note */}
      <Pressable
        onPress={() => {
          setSelectedNote(null);
          setNoteText("");
          setShowModal(true);
        }}
        className="absolute bottom-[6.5rem] left-4 right-4 flex-row items-center justify-center gap-2 bg-green-600 py-4 rounded-lg"
      >
        <ThemedText className="text-white font-semibold text-xl">+</ThemedText>
        <ThemedText className="text-white font-semibold text-lg">
          Add Note
        </ThemedText>
      </Pressable>

      {/* Modal */}
      <Modal
        animationType="slide"
        transparent
        visible={showModal}
        onRequestClose={() => setShowModal(false)}
      >
        <View className="flex-1 bg-black/50 justify-center items-center">
          <View className="w-11/12 bg-white rounded-2xl p-6">
            <ThemedText className="text-lg font-bold mb-4">
              {selectedNote ? "Edit Note" : "Add Note"}
            </ThemedText>

            <TextInput
              placeholder="Add details here..."
              value={noteText}
              onChangeText={setNoteText}
              multiline
              className="border border-gray-300 rounded-lg p-3 h-28 text-gray-800"
            />

            <Pressable
              onPress={handleSaveNote}
              className="bg-green-600 mt-5 py-3 rounded-lg"
            >
              <ThemedText className="text-white text-center font-semibold">
                Save
              </ThemedText>
            </Pressable>
          </View>
        </View>
      </Modal>
    </ThemedView>
  );
};

export default ClientNotePage;
