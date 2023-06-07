import { Module } from '@nestjs/common';
import { CommonService } from './common.service';
import { AuthGuardGuard } from './auth-guard/auth-guard.guard';

@Module({
  providers: [CommonService, AuthGuardGuard],
  exports: [CommonService, AuthGuardGuard],
})
export class CommonModule {}
