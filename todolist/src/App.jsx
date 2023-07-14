function App() {
  const handleNameChange = () => {
    const names = ["Husni", "Kiyas", "Raan"];
    const int = Math.floor(Math.random() * 3);
    return names[int];
  };

  return (
    <>
      <header>Hello {handleNameChange()}!</header>
      <main>Test</main>
    </>
  );
}

export default App;
