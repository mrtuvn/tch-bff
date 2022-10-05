import { Injectable } from '@nestjs/common';
import { MagentoService } from 'src/magento/magento.service';
import * as _ from 'lodash';

@Injectable()
export class BannerService {
    constructor(private magento: MagentoService) {}


}
