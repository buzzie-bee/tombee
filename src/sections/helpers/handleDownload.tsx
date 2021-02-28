import axios from 'axios';
import fileDownload from 'js-file-download';

export const handleDownload = async (url: string, filename: string) => {
  const res = await axios.get(url, {
    responseType: 'blob',
  });
  if (res.status === 200) {
    fileDownload(res.data, filename);
  } else {
    console.log('Error status: ', res.status);
    console.log(res);
  }
};
