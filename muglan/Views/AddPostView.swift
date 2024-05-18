//
//  AddPostView.swift
//  muglan
//
//  Created by Mohit Paudyal on 5/17/24.
//

import SwiftUI

struct AddPostView: View {
    
    @StateObject var viewModel = AddPostViewViewModel()
    @Binding var newPostPresented: Bool
    
    var body: some View {
        VStack{
            Text("Add New Job")
                .font(.system(size: 24))
                .bold()
                .padding(.top, 50)
            
            Form {
                
                TextField("Title", text: $viewModel.title)
                    .textFieldStyle(DefaultTextFieldStyle())
                
                TextField("Description", text: $viewModel.description)
                    .textFieldStyle(DefaultTextFieldStyle())

                TextField("Street Address", text: $viewModel.street_address)
                    .textFieldStyle(DefaultTextFieldStyle())

                TextField("City", text: $viewModel.city)
                    .textFieldStyle(DefaultTextFieldStyle())
               
                TextField("Zipcode", text: $viewModel.zipcode)
                    .textFieldStyle(DefaultTextFieldStyle())
                
                TextField("Email address", text: $viewModel.contact_email_address)
                    .textFieldStyle(DefaultTextFieldStyle())
                
                TextField("Phone number", text: $viewModel.contact_phone_number)
                    .textFieldStyle(DefaultTextFieldStyle())
                
                DatePicker ("Due date", selection: $viewModel.dueDate)
                    .datePickerStyle(GraphicalDatePickerStyle())
                
                MgButton(title: "Save", backgroundColor: .pink){
                    if viewModel.canSave {
                        viewModel.save()
                        newPostPresented = false
                    } else {
                        viewModel.showAlert = true
                    }
                }
                .alert(isPresented: $viewModel.showAlert) {
                    Alert(title: Text("Error"), message: Text("All fields are required or did you select an earlier date? ") )
                }
            }
        }
    }
}

#Preview {
    AddPostView(newPostPresented: Binding(get: {return true}, set: { _ in}))
}
