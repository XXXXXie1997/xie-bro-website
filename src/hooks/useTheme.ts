import { ref, computed } from "vue";
let theme: string | null = localStorage.getItem("theme");
const mainTheme = ref<string>(theme || "dark");

const changeTheme = () => {
  mainTheme.value = mainTheme.value === "bright" ? "dark" : "bright";
  localStorage.setItem("theme", mainTheme.value);
};

const style = computed(() => {
  return `color: ${
    mainTheme.value === "bright" ? "#333" : "#f5f5f5"
  };background-color: ${mainTheme.value === "bright" ? "#f5f5f5" : "#333"};`;
});

export { mainTheme, changeTheme, style };
