// 1. Seleccionar los elementos del DOM
const themeToggleButton = document.getElementById("theme-toggle-btn");
const body = document.body;

// 2. Definir la clave para localStorage
const themeKey = "theme-preference";

// 3. Función para aplicar el tema
const applyTheme = (theme) => {
  if (theme === "dark") {
    body.classList.add("dark-mode");
  } else {
    body.classList.remove("dark-mode");
  }
};

// 4. Función para cambiar el tema
const toggleTheme = () => {
  // Comprobar si el body ya tiene la clase 'dark-mode'
  const currentThemeIsDark = body.classList.contains("dark-mode");

  // Si está oscuro, cambiar a claro. Si está claro, cambiar a oscuro.
  const newTheme = currentThemeIsDark ? "light" : "dark";

  // Guardar la preferencia en localStorage
  localStorage.setItem(themeKey, newTheme);

  // Aplicar el nuevo tema al body
  applyTheme(newTheme);
};

// 5. Añadir el evento click al botón
themeToggleButton.addEventListener("click", toggleTheme);

// 6. Cargar la preferencia del usuario al cargar la página
const savedTheme = localStorage.getItem(themeKey);

// Comprobar si hay un tema guardado
if (savedTheme) {
  applyTheme(savedTheme);
} else {
  // Opcional: Comprobar la preferencia del sistema operativo
  const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
  applyTheme(prefersDark ? "dark" : "light");
}
