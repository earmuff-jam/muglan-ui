//
//  PostListView.swift
//  muglan
//
//  Created by Mohit Paudyal on 5/17/24.
//

import SwiftUI
import FirebaseFirestoreSwift

struct PostListView: View {
    
    @StateObject var viewModel = PostListViewViewModel()
    @FirestoreQuery var jobs: [Job]
    
    init() {
        self._jobs = FirestoreQuery(collectionPath: "jobs")
    }
    
    var body: some View {
        NavigationView {
            VStack {
                List(jobs) { job in
                    ItemView(job: job)
                        .swipeActions {
                            Button("Delete") {
                                viewModel.delete(id: job.id)
                            }
                            .tint(.red)
                        }
                }
                .listStyle(PlainListStyle())
            }
            .navigationTitle("View jobs")
            .toolbar {
                Button {
                    //action
                    viewModel.showingAddPostViewModel = true
                } label: {
                    Image(systemName: "plus")
                }
            }
            .sheet(isPresented: $viewModel.showingAddPostViewModel, content: {
                AddPostView(newPostPresented: $viewModel.showingAddPostViewModel)
            })
        }
    }
}

#Preview {
    PostListView()
}
