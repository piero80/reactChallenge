export function createError(type) {
    return function errorCreator(message) {
      return {
        type,
        message: message && message.toString()
      };
    };
  }