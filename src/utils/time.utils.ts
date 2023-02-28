export const formatSecondsToClock = (secondsLeft: number) => {
    const minutes = Math.floor(secondsLeft / 60);
    const seconds = secondsLeft % 60;

    // Add leading 0 if seconds or minutes are less than 10 in the return statement
    return `${minutes < 10 ? "0" + minutes : minutes}:${
        seconds < 10 ? "0" + seconds : seconds
    }`;
};
