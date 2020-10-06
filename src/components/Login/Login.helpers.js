export const validateEmail = email => {
    const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}

export const validateName = name => {
    const regName = /^[a-zA-Z]+$/;
    return regName.test(String(name));
}

export const validateZipCode = zipCode => {
    const regZipCode = /^[0-9]{2}-[0-9]{3}$/;
    return regZipCode.test(String(zipCode));
}

export const validateDate = date => {
    const regDate = /^(\d{1,2})-(\d{1,2})-(\d{4})$/;
    return regDate.test(String(date));
}

export const validateTime = time => {
    const regTime = /^([01]?[0-9]|2[0-3]):[0-5][0-9]$/;
    return regTime.test(String(time));
}

export const emailErrorMessage = 'Podany email jest nieprawidłowy!';

export const passwordErrorMessage = 'Twoje hasło musi zawierać co najmniej 6 znaków!';

export const passwordRepeatErrorMessage = 'Podane hasła różnią się!';

export const nameErrorMessage = 'Podane imię jest niepoprawne!';

export const messageErrorMessage = 'Wiadomość musi zawierać co najmniej 120 znaków!';

export const validateFormMessage1 = "Wiadomość została wysłana!";

export const validateFormMessage2 = "Wkrótce się skontaktujemy.";

export const streetErrorMessage = "Nazwa ulicy musi zawierać co najmniej dwa znaki";

export const cityErrorMessage = "Nazwa miasta musi zawierać co najmniej dwa znaki";

export const zipCodeErrorMessage = "Wprowadź kod pocztowy w formacie XX-XXX np. 82-823.";

export const phoneNumberErrorMessage = "Numer telefonu musi składać się z dziewięciu cyfr";

export const dateErrorMessage = "Wprowadź datę w formacie DD-MM-YYYY";

export const timeErrorMessage = "Wprowadź godzinę w formacie HH:MM";