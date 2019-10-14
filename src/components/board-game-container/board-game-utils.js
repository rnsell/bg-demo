export const wait = timeInMs => {
  return new Promise(resolve => {
    setTimeout(resolve, timeInMs);
  });
};

export const getBoardGameData = async () => {
  try {
    const data = await fetch(
      "https://evkzab6ygc.execute-api.us-east-1.amazonaws.com/default/game-list"
    ).then(response => {
      return response.json();
    });

    // Endpoint loads quite fast that loading screen might not appear
    // Adding some lag to simulate actual loading
    await wait(500);

    return data;
  } catch (ex) {
    throw new Error("ERROR_FETCHING_DATA");
  }
};
