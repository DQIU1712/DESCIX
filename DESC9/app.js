(() => {
    const App = {
      config: {
        apiBaseUrl: "https://pokeapi.co/api/v2/pokemon/ditto",
      },
      htmlElements: {
        form: document.querySelector(".pokemon-form"),
        input: document.querySelector("#pokemon-input"),
      },
      init: () => {
        App.htmlElements.form.addEventListener(
          "submit",
          App.handlers.handleFormSubmit
        );
      },
      handlers: {
        handleFormSubmit: async (e) => {
          e.preventDefault();
          const ditto = App.htmlElements.input.value;
          const url = App.utils.getUrl({ ditto });
          const { data } = await axios.post(url);
          console.log({ data });
        },
      },
      
    };
    App.init();
  })();