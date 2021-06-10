interface Error {
  code: any;
  message: string;
}

export const isError = (error: any): error is Error => {
  return (
    typeof error.message !== 'undefined' && typeof error.code !== 'undefined'
  );
};

export const formattedError = (error: any) => {
  return isError(error) ? error.message : error;
};
