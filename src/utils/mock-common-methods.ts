export class MockCommonMethods {
    static addListener(callback: (payload?: any) => void): void {
        callback();
    }
    static removeListener(callback: (payload?: any) => void): void {
        callback();
    }
}