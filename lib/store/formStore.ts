import { create } from "zustand";
import { FormFields } from "@/types/types";

interface FormStore {
  draft: FormFields;
  setDraft: (data: Partial<FormFields>) => void;
  clearDraft: () => void;
}

const defaultValues: FormFields = {
  name: "",
  email: "",
  date: "",
  comment: "",
};

export const useFormStore = create<FormStore>((set) => ({
  draft: defaultValues,

  setDraft: (data) =>
    set((state) => ({
      draft: { ...state.draft, ...data },
    })),

  clearDraft: () => set({ draft: defaultValues }),
}));