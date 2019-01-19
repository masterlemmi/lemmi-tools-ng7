import { DevToolsRoutingModule } from './devtools-routing.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DevToolsHomeComponent } from './dev-tools-home/dev-tools-home.component';
import { LanguagesComponent } from './languages/languages.component';
import { IdesComponent } from './ides/ides.component';
import { SharedModule } from 'app/shared/shared.module';
import { ShortcutsComponent } from './ides/shortcuts/shortcuts.component';
import { PluginsComponent } from './ides/plugins/plugins.component';

@NgModule({
  declarations: [DevToolsHomeComponent, LanguagesComponent, IdesComponent, ShortcutsComponent, PluginsComponent],
  imports: [
    DevToolsRoutingModule, SharedModule
  ]
})
export class DevtoolsModule { }
