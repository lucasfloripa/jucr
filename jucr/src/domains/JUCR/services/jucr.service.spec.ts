import { JucrService } from '.';
import { GetDataFromApiUC, GetDataFromDbUC, UpdateDataDbUC } from '../usecases';
import { IChargingStation } from '../interfaces';

import { Test, TestingModule } from '@nestjs/testing';

const mockChargingStationsArray: IChargingStation[] = [
  {
    AddressInfo: {
      ID: 1,
      CountryID: '55',
      Country: {
        ID: 1,
        ContinentCode: '55',
        ISOCode: 'BR',
        Title: 'Brazil'
      },
      Latitude: 1,
      Longitude: 1
    },
    Connections: {
      ID: 1
    },
    OperatorInfo: {
      ID: 1
    },
    StatusType: {
      ID: 1,
      IsOperational: true,
      IsUserSelectable: true,
    }
  }
]

describe('JucrService', () => {
  let jucrService: JucrService;
  let getDataFromApiUC: GetDataFromApiUC;
  let getDataFromDbUC: GetDataFromDbUC;
  let updateDataDbUC: UpdateDataDbUC;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        JucrService,
        {
          provide: GetDataFromApiUC,
          useValue: {
            getData: jest.fn().mockResolvedValue(mockChargingStationsArray),
          },
        },
        {
          provide: GetDataFromDbUC,
          useValue: {
            getData: jest.fn().mockResolvedValue(mockChargingStationsArray),
          },
        },
        {
          provide: UpdateDataDbUC,
          useValue: {
            updateData: jest.fn()
          },
        },
      ],
    }).compile();

    jucrService = module.get<JucrService>(JucrService);
    getDataFromApiUC = module.get<GetDataFromApiUC>(GetDataFromApiUC);
    getDataFromDbUC = module.get<GetDataFromDbUC>(GetDataFromDbUC);
    updateDataDbUC = module.get<UpdateDataDbUC>(UpdateDataDbUC);
  });

  it('should be defined', () => {
    expect(jucrService).toBeDefined();
    expect(getDataFromApiUC).toBeDefined();
    expect(getDataFromDbUC).toBeDefined();
    expect(updateDataDbUC).toBeDefined();
  });

  describe('pullCurrentChargingStationFromApi()', () => {
    it('should call getDataFromApiUC.getData() correctly', async () => {
      //Act
      await jucrService.pullCurrentChargingStationFromApi();

      //Assert
      expect(getDataFromApiUC.getData).toHaveBeenCalledTimes(1);
    })
    it('should return success true when getDataFromApiUC.getData() returns data', async () => {
      //Act
      const result = await jucrService.pullCurrentChargingStationFromApi();

      //Assert
      expect(result).toEqual({ success: true });
    })
    it('should call updateDataDbUC.updateData() with correct params when getDataFromApiUC.getData() returns data', async () => {
      //Act
      await jucrService.pullCurrentChargingStationFromApi();

      //Assert
      expect(updateDataDbUC.updateData).toHaveBeenCalledTimes(1);
      expect(updateDataDbUC.updateData).toHaveBeenCalledWith(mockChargingStationsArray);
    })
    it('should return success false when getDataFromApiUC.getData() returns nothing', async () => {
      jest.spyOn(getDataFromApiUC, 'getData').mockReturnValueOnce(null)
      //Act
      const result = await jucrService.pullCurrentChargingStationFromApi();

      //Assert
      expect(result).toEqual({ success: false });
    })
  });
  describe('getChargingStationFromDb()', () => {
    it('should call getDataFromDbUC.getData() correctly', async () => {
      //Act
      await jucrService.getChargingStationFromDb();

      //Assert
      expect(getDataFromDbUC.getData).toHaveBeenCalledTimes(1);
    })
    it('should return a list of charging stations when getDataFromDbUC.getData() returns data', async () => {
      //Act
      const result = await jucrService.getChargingStationFromDb();

      //Assert
      expect(result).toEqual(mockChargingStationsArray);
    })
  });
});
