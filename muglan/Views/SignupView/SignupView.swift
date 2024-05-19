//
//  SignupView.swift
//  muglan
//
//  Created by Mohit Paudyal on 5/17/24.
//
import SwiftUI

struct SignupView: View {
    
    @StateObject var viewModal = SignupViewViewModel()
    
    var body: some View {
        VStack {
            HeaderView(title: "Register", subtitle: "Get notified", angleOfRotation: -15, backgroundColor: .yellow)
            
            ScrollView {
                VStack(spacing: 10) {
                    TextField("Email Address", text: $viewModal.email_address_text)
                        .textFieldStyle(RoundedBorderTextFieldStyle())
                        .autocorrectionDisabled()
                        .autocapitalization(.none)
                        .padding()
                    
                    TextField("Username", text: $viewModal.username)
                        .textFieldStyle(RoundedBorderTextFieldStyle())
                        .autocorrectionDisabled()
                        .autocapitalization(.none)
                        .padding()
                    
                    TextField("First name", text: $viewModal.firstname)
                        .textFieldStyle(RoundedBorderTextFieldStyle())
                        .autocorrectionDisabled()
                        .autocapitalization(.none)
                        .padding()
                    
                    TextField("Last name", text: $viewModal.lastname)
                        .textFieldStyle(RoundedBorderTextFieldStyle())
                        .autocorrectionDisabled()
                        .autocapitalization(.none)
                        .padding()
                    
                    SecureField("Password", text: $viewModal.password)
                        .textFieldStyle(RoundedBorderTextFieldStyle())
                        .autocorrectionDisabled()
                        .autocapitalization(.none)
                        .padding()
                    
                    if !viewModal.errorMessage.isEmpty {
                        Text(viewModal.errorMessage).foregroundColor(.red)
                            .padding(.horizontal)
                    }
                    
                    MgButton(title: "Register", backgroundColor: .green) {
                        // action
                        viewModal.register()
                    }
                    .frame(maxWidth: .infinity, minHeight: 44) // Ensure the button expands to full width
                    .padding(.horizontal)
                }
                .padding(.horizontal)
                .padding(.bottom, 20)
            }
            .offset(y: -20)
        }
        .edgesIgnoringSafeArea(.top)
    }
}

#Preview {
    SignupView()
}
