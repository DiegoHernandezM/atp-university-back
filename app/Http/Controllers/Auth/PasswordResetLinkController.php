<?php

namespace App\Http\Controllers\Auth;

use App\Http\Controllers\Controller;
use App\Mail\ForgotPasswordMail;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Mail;
use Illuminate\Support\Facades\Validator;
use Illuminate\Support\Str;
use Inertia\Inertia;
use Inertia\Response;

class PasswordResetLinkController extends Controller
{
    /**
     * Display the password reset link request view.
     */
    public function create(): Response
    {
        return Inertia::render('Auth/ForgotPassword', [
            'status' => session('status'),
        ]);
    }

    /**
     * Handle an incoming password reset link request.
     *
     * @throws \Illuminate\Validation\ValidationException
     */
    public function store(Request $request)
    {
        try {
            $validate = Validator::make($request->all(), [
                'email' => 'required|email|exists:users'
            ]);
            if ($validate->fails()) {
                return back()->with('status', ['message' => 'No existe en nuestros registros este correo. Verifique e intente de nuevo', 'error' => true]);
            }
            $user = User::where('email', $request->email)->first();
            $newPassword = Str::random(10);
            $user->password = Hash::make($newPassword);
            $user->save();

            Auth::logoutOtherDevices($newPassword);

            Mail::to($user->email)->send(new ForgotPasswordMail($user, $newPassword));
            return back()->with('status', ['message' => 'Se te ha enviado un correo con tus nuevas credenciales', 'error' => false]);
        } catch (\Exception $e) {
            return back()->with('status', ['message' => $e->getMessage(), 'error' => true]);
        }
    }

}
