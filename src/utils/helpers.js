export const scrollToContent = (string) => {
  const content = document.getElementById(string);
  if (content) {
    content.scrollIntoView({ behavior: 'smooth' });
  }
};
