import SwiftUI
import FirebaseFirestoreSwift
import FirebaseAuth

struct PostListView: View {
    
    @State private var showSearchView = false
    @State private var showMailView = false
    @State private var title = ""
    @State private var emailRecipient = ""
    @StateObject var viewModel = PostListViewViewModel()
    
    var body: some View {
        NavigationView {
            if showSearchView {
                SearchView(show: $showSearchView)
            } else {
                VStack {
                    SearchAndFilter()
                        .onTapGesture {
                            withAnimation(.snappy) {
                                showSearchView.toggle()
                            }
                        }
                    List(viewModel.sortedJobs) { job in
                        ItemView(job: job)
                            .swipeActions {
                                
                                if job.creator_id == Auth.auth().currentUser?.uid {
                                    Button("Delete") {
                                        viewModel.delete(id: job.id)
                                    }
                                    .tint(.red)
                                } else {
                                    Button("Apply") {
                                        
                                        if viewModel.canSendMail() {
                                            print("wath")
                                            viewModel.sendEmail(title: job.title, to: job.creator_email_address)

                                        } else {
                                            viewModel.showErrorInSendMessage = true
                                        }
                                    }
                                    .tint(.green)
                                }
                                
                            }
                    }
                    .listStyle(PlainListStyle())
                }
                .navigationTitle("View jobs")
                .toolbar {
                    Button {
                        viewModel.showingAddPostViewModel = true
                    } label: {
                        Image(systemName: "plus")
                    }
                }
                .sheet(isPresented: $viewModel.showingAddPostViewModel) {
                    AddPostView(newPostPresented: $viewModel.showingAddPostViewModel)
                }
                .alert(isPresented: $viewModel.showErrorInSendMessage) {
                       Alert(title: Text("Error"), message: Text("Device cannot send mail."), dismissButton: .default(Text("OK")))
                   }

            }
        }
    }
}

#Preview {
    PostListView()
}
