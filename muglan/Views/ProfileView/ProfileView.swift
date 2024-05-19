//
//  ProfileView.swift
//  muglan
//
//  Created by Mohit Paudyal on 5/17/24.
//

import SwiftUI

struct ProfileView: View {
    
    @StateObject var viewModel = ProfileViewViewModel()
    
    private let userID: String
    
    init (userID: String) {
        self.userID = userID
    }
    
    var body: some View {
        NavigationView {
            VStack {
                if let user = viewModel.user {
                    // builder method to build the profile details
                    profileDetailsView(user: user, viewModel: viewModel)
                } else {
                    Text("loading profile ...")
                }
                
            }
            .navigationTitle("Profile")
        }
        .onAppear{
            viewModel.fetchUser()
        }
    }
}

@ViewBuilder
private func profileDetailsView(user: User, viewModel: ProfileViewViewModel) -> some View {
    Image(systemName: "person.circle")
        .resizable()
        .aspectRatio(contentMode: .fit)
        .foregroundColor(/*@START_MENU_TOKEN@*/.blue/*@END_MENU_TOKEN@*/)
        .frame(width: 125, height: 125)
        .padding()
    
    VStack(alignment: .leading){
        HStack{
            Text("Name: ")
                .bold()
                
            Text(user.firstname)
            Text(user.lastname)
        }.padding()
    
        HStack{
            Text("Email Address: ")
                .bold()
            Text(user.email)
        }.padding()

        HStack{
            Text("Member Since: ")
                .bold()
            Text("\(Date(timeIntervalSince1970: user.joined).formatted(date: .abbreviated, time: .shortened))")
        }
        .padding()
    }.padding()
    
    Button("Log out") {
        viewModel.logout()
    }.tint(.red)
        .padding()
}


#Preview {
    ProfileView(userID: "QwHCAcSzk8PqbKG49ExBwMH1VFx1")
}
