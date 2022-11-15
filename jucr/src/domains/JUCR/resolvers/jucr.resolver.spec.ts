import { JucrResolver } from '.';
import { JucrService } from '../services';

import { Test, TestingModule } from '@nestjs/testing';

describe('JucrResolver', () => {
  let jucrResolver: JucrResolver;
  let jucrService: JucrService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        JucrResolver,
        {
          provide: JucrService,
          useValue: {
            getChargingStationFromDb: jest.fn(),
            pullCurrentChargingStationFromApi: jest.fn()
          },
        },
      ],
    }).compile();

    jucrResolver = module.get<JucrResolver>(JucrResolver);
    jucrService = module.get<JucrService>(JucrService);
  });

  it('should be defined', () => {
    expect(jucrService).toBeDefined();
    expect(jucrResolver).toBeDefined();
  });

  describe('getChargingStations()', () => {
    it('should call jucrService.getChargingStationFromDb() correctly', async () => {
      //Act
      await jucrResolver.getChargingStations();

      //Assert
      expect(jucrService.getChargingStationFromDb).toHaveBeenCalledTimes(1);
    })
  });
  describe('pullCurrentChargingStations()', () => {
    it('should call getDataFromDbUC.getData() correctly', async () => {
      //Act
      await jucrResolver.pullCurrentChargingStations();

      //Assert
      expect(jucrService.pullCurrentChargingStationFromApi).toHaveBeenCalledTimes(1);
    })
  });
});
