import { Module } from '@nestjs/common';
import { CmsService } from './cms.page.service';
import { CmsBlockService } from './cms.block.service';
import { CmsResolver } from './cms.resolver';


@Module({
  providers: [CmsService, CmsBlockService, CmsResolver]
})
export class CmsModule {}
