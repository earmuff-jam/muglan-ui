//
//  LoginView.swift
//  muglan
//
//  Created by Mohit Paudyal on 5/17/24.
//

import SwiftUI

struct LoginView: View {
    
    @StateObject var viewModel = LoginViewViewModel()
    
    var body: some View {
        NavigationView {
            VStack {
                HeaderView(title: "Muglan", subtitle: "Helping you with your quest for jobs", angleOfRotation: 15, backgroundColor: .pink)
                
                ScrollView {
                    VStack(spacing: 10) {
                        TextField("Email Address", text: $viewModel.email_address_text)
                            .textFieldStyle(RoundedBorderTextFieldStyle())
                            .autocorrectionDisabled()
                            .autocapitalization(.none)
                            .padding()
                        
                        SecureField("Password", text: $viewModel.password)
                            .textFieldStyle(RoundedBorderTextFieldStyle())
                            .autocorrectionDisabled()
                            .autocapitalization(.none)
                            .padding()
                        
                        MgButton(title: "Login", backgroundColor: .blue) {
                            viewModel.login()
                        }
                        .frame(maxWidth: .infinity, minHeight: 44) // Ensure the button expands to full width
                        .padding(.horizontal)
                        
                        if !viewModel.errorMessage.isEmpty {
                            Text(viewModel.errorMessage).foregroundColor(.red)
                                .padding(.horizontal)
                        }
                        
                        VStack {
                            Text("Don't have an account?")
                            NavigationLink("Register", destination: SignupView())
                        }
                        .padding(.top, 20)
                        .padding(.bottom, 50)
                    }
                    .padding(.horizontal)
                }
                .offset(y: -20)
            }
            .edgesIgnoringSafeArea(.top)
        }
    }
}

#Preview {
    LoginView()
}
