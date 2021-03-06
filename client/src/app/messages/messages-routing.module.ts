import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// Componentes
import { MainComponent } from './components/main/main.component';
import { SendComponent } from './components/send/send.component';
import { ReceivedComponent } from './components/received/received.component';
import { SendedComponent } from './components/sended/sended.component';

import { UserGuard } from './../services/user.guard';

const messagesRoutes: Routes = [
    {
        path: 'mensajes',
        component: MainComponent,
        children: [
            { path: '', redirectTo: 'recibidos', pathMatch: 'full' },
            { path: 'enviar', component: SendComponent, canActivate: [UserGuard] },
            { path: 'recibidos', component: ReceivedComponent, canActivate: [UserGuard] },
            { path: 'recibidos/:page', component: ReceivedComponent, canActivate: [UserGuard] },
            { path: 'enviados', component: SendedComponent, canActivate: [UserGuard] },
            { path: 'enviados/:page', component: SendedComponent, canActivate: [UserGuard] }
        ]
    }
];

@NgModule({
    imports: [
        RouterModule.forChild(messagesRoutes)
    ],
    exports: [
        RouterModule
    ]
})
export class MessagesRoutingModule { }
