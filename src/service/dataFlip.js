const url = "https://nextar.flip.id/frontend-test";

export async function getData() {
    try {
        let response = await fetch(
          url,
        );
        let responseJson = await response.json();
        return responseJson;
      } catch (error) {
        console.error(error);
    }
};