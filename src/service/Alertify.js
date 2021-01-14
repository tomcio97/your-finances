import alertify from 'alertifyjs';

export const AlertifyService = {

    success: (message) => alertify.success(message),
    message: (message) => alertify.message(message),
    error: (message) => alertify.error(message),
}