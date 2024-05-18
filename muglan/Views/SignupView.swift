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
        HeaderView(title: "Register", subtitle: "Get notified", angleOfRotation: -15, backgroundColor: .yellow)
        
        // login form component
        Form {
            TextField("Email Address", text: $viewModal.email_address_text)
                .textFieldStyle(DefaultTextFieldStyle())
                .autocorrectionDisabled()
                .autocapitalization(.none)
                .padding(10)
            
            TextField("Username", text: $viewModal.username)
                .textFieldStyle(DefaultTextFieldStyle())
                .autocorrectionDisabled()
                .autocapitalization(.none)
                .padding(10)
            
            TextField("First name", text: $viewModal.firstname)
                .textFieldStyle(DefaultTextFieldStyle())
                .autocorrectionDisabled()
                .autocapitalization(.none)
                .padding(10)
            
            TextField("Last name", text: $viewModal.lastname)
                .textFieldStyle(DefaultTextFieldStyle())
                .autocorrectionDisabled()
                .autocapitalization(.none)
                .padding(10)
            
            SecureField("Password", text: $viewModal.password)
                .textFieldStyle(DefaultTextFieldStyle())
                .autocorrectionDisabled()
                .autocapitalization(.none)
                .padding(10)
            
            if !viewModal.errorMessage.isEmpty {
                Text(viewModal.errorMessage).foregroundColor(.red)
            }
            
            MgButton(title: "Register", backgroundColor: .green) {
                // action
                viewModal.register()
            }.padding(10)
            
        }
        .offset(y: -80)
        
            Spacer()
    }
}

#Preview {
    SignupView()
}
