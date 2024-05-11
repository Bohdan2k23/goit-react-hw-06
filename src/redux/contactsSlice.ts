import { createSlice, nanoid, type PayloadAction } from "@reduxjs/toolkit";

const initData = [
  {
    id: "id-1",
    name: "Rosie Simpson",
    number: "459-12-56",
  },
  {
    id: "id-2",
    name: "Hermione Kline",
    number: "443-89-12",
  },
  {
    id: "id-3",
    name: "Eden Clements",
    number: "645-17-79",
  },
  {
    id: "id-4",
    name: "Annie Copeland",
    number: "227-91-26",
  },
];

const contactsSlice = createSlice({
  name: "contacts",
  initialState: initData,
  reducers: {
    // addContact(state, action) {
    //   state.push({
    //     ...action.payload,
    //     id: nanoid(),
    //   });
    // },
    addContact: {
      reducer(state, action: PayloadAction<{ name: string; number: string; id: string }>) {
        state.push(action.payload);
      },
      prepare(name, number) {
        return {
          payload: {
            name,
            number,
            id: nanoid(),
          },
        };
      },
    },
    deleteContact(state, action) {
      const index = state.findIndex((contact) => contact.id === action.payload);

      state.splice(index, 1);
    },
  },
});

export const selectContacts = (s) => s.contacts;

export const { addContact, deleteContact } = contactsSlice.actions;
export const contactsReducer = contactsSlice.reducer;
