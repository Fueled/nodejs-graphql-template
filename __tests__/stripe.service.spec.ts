import * as StripeService from "../src/services/stripe.service";

const mockedPaymentIntentsCreate = jest.fn((payload) => ({
  id: "pi_1234",
  ...payload,
}));

jest.mock("stripe", () => {
  const paymentIntents = jest.fn();
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore
  paymentIntents.create = (...args) => mockedPaymentIntentsCreate(...args);
  return jest.fn().mockImplementation(() => ({ paymentIntents }));
});

describe("Stripe Service", () => {
  afterAll(() => {
    jest.resetAllMocks();
  });

  it("should create a capture payment intent set to manual", async () => {
    const paymentIntent = await StripeService.createCapturePaymentIntent(100, "usd");

    expect(paymentIntent.id).toBe("pi_1234");
    expect(paymentIntent.amount).toBe(100);
    expect(paymentIntent.currency).toBe("usd");
    expect(paymentIntent.capture_method).toBe("manual");
  });
});
