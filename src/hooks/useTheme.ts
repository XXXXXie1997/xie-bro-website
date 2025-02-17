import { ref, computed } from "vue";

const mainTheme = ref<"dark" | "bright">("bright");

const changeTheme = () => {
  mainTheme.value = mainTheme.value === "bright" ? "dark" : "bright";
};

const style = computed(() => {
  return `color: ${
    mainTheme.value === "bright" ? "#333" : "#fafafa"
  };background-color: ${mainTheme.value === "bright" ? "#fafafa" : "#333"};`;
});

export { mainTheme, changeTheme, style };
