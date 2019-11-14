import axios from 'axios';
import { REST_URL } from 'src/configuration';

const server = axios.create({ baseURL: REST_URL });

class LiquidServer {
  public display = async (text: string, row: number, col: number) => {
    try {
      await server.post('display', { text, row, col });
    } catch {
      window.alert('unable to display');
    }
  };

  public clear = async () => {
    try {
      await server.post('clear');
    } catch {
      window.alert('unable to clear');
    }
  };
}

export default new LiquidServer();
