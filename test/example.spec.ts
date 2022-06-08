const mockData = [
  {
    id: 1,
    foo: "bar1",
  },
  {
    id: 2,
    foo: "bar2",
  },
];

describe("a very basic test", () => {
  it("should be truthy", () => {
    expect(true).toBeTruthy();
  });
});

describe("a test with a Prisma data source mock", () => {
  // eslint-disable-next-line
  let dbRepository: any;

  beforeEach(() => {
    dbRepository = {
      testModel: {
        findMany: jest.fn().mockResolvedValue(mockData),
      },
    };
  });

  afterEach(() => {
    jest.resetAllMocks();
  });

  it("should return mock data", async () => {
    const data = await dbRepository.testModel.findMany();
    expect(data.length).toBe(2);
    expect(data[0]).toStrictEqual(
      expect.objectContaining({
        id: expect.any(Number),
        foo: expect.any(String),
      })
    );
    expect(data[1]).toMatchObject({
      id: mockData[1].id,
      foo: mockData[1].foo,
    });
  });
});
