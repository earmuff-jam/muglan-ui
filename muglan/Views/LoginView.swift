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
        NavigationView{
            VStack {
                HeaderView(title: "Muglan", subtitle: "Helping you with your quest for jobs", angleOfRotation: 15, backgroundColor: .pink)
            
                // login form component
                Form {
                    TextField("Email Address", text: $viewModel.email_address_text)
                        .textFieldStyle(DefaultTextFieldStyle())
                        .autocorrectionDisabled()
                        .autocapitalization(.none)
                        .padding(10)
                    
                    SecureField("Password", text: $viewModel.password)
                        .textFieldStyle(DefaultTextFieldStyle())
                        .autocorrectionDisabled()
                        .autocapitalization(.none)
                        .padding(10)
                
                    MgButton(title: "Login", backgroundColor: .blue) {
                        viewModel.login()
                    }.padding(10)
                
                    if !viewModel.errorMessage.isEmpty {
                        Text(viewModel.errorMessage).foregroundColor(.red)
                    }
                    
                }.offset(y: -60)
                VStack {
                    Text("Don't have an account?")
                    NavigationLink("Register", destination: SignupView())
                    .padding(.bottom, 50)
                }
                
                
                Spacer()
            }
        }
    }
}

#Preview {
    LoginView()
}
