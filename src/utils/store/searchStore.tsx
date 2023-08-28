import { Value } from "sass";
import { create } from "zustand";

interface SearchStoreType {
    value: string;
    setValue: (v: string) => void;
    suggestions: string;
};

const useSearchStore = create<SearchStoreType>((set) => ({
    value: '',
    setValue: (v) => set({value: v}),
    suggestions: '',
}))