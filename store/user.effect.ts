// user.effects.ts

import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { loadUsers, loadUsersFailure, loadUsersSuccess } from "./counter.action";
import { catchError, map, of, switchMap } from "rxjs";

@Injectable()
export class UserEffects {

  loadUsers$ = createEffect(() =>
    this.actions$.pipe(

      ofType(loadUsers),

      switchMap(() =>
        this.userService.getUsers().pipe(

          map(users =>
            loadUsersSuccess({ users })
          ),

          catchError(error =>
            of(loadUsersFailure({ error }))
          )

        )
      )

    )
  );

  constructor(
    private actions$: Actions,
    private userService: UserService
  ) {}
}