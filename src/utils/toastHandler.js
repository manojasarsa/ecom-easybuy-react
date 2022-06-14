export const toastHandler = (setToastState) => {
    setToastState(true);
    setTimeout(() => {
        setToastState(false);
    }, 3000);
}