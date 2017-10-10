export class LogService {
  Log(data: any, component: string, method: string): void {
    console.log('Component: ' + component + '. Method: ' + method);
    console.log(data);
    console.log('--------------------------------------------------------');
  }
}
