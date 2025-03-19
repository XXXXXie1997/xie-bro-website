import { ref, computed } from "vue";
let theme: string | null = localStorage.getItem("theme");
const mainTheme = ref<string>(theme || "dark");

const changeTheme = () => {
  mainTheme.value = mainTheme.value === "bright" ? "dark" : "bright";
  localStorage.setItem("theme", mainTheme.value);
};

const style = computed(() => {
  return `color: ${mainTheme.value === "bright" ? "#333" : "#f5f5f5"};`;
});

const mainStyle = computed(() => {
  return `color: ${
    mainTheme.value === "bright" ? "#333" : "#f5f5f5"
  };background: ${
    mainTheme.value === "bright"
      ? "#f5f5f5"
      : "linear-gradient(135deg, #0f2027 0%, #17333f 100%)"
  };`;
});

export { mainTheme, changeTheme, style, mainStyle };
