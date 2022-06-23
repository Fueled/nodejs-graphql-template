export interface RequestUtils<R> {
  getTokenFromRequest(req: R): string | null;
}
