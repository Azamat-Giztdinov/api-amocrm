import { HttpService } from '@nestjs/axios';
import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { firstValueFrom } from 'rxjs';

@Injectable()
export class LeadsService {
  constructor(
    private readonly httpService: HttpService,
    private readonly configService: ConfigService,
  ) {}

  async getLesds(query?: string): Promise<any> {
    const amocrmApiUrl = `https://${this.configService.get<string>('AMOCRM_DOMAIN')}.amocrm.ru/api/v4/leads`;
    const accessToken = this.configService.get<string>('AMOCRM_ACCESS_TOKEN');
    const response = await firstValueFrom(
      this.httpService.get(amocrmApiUrl, {
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
        params: query ? { query } : {},
      }),
    );
    return response.data;
  }
}
