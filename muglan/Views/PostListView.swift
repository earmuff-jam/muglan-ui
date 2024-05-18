//
//  PostListView.swift
//  muglan
//
//  Created by Mohit Paudyal on 5/17/24.
//

import SwiftUI
import FirebaseFirestoreSwift
import FirebaseAuth

struct PostListView: View {
    
    @StateObject var viewModel = PostListViewViewModel()
    @FirestoreQuery var allJobs: [Job]
    
    init() {
        self._allJobs = FirestoreQuery(collectionPath: "jobs")
    }
    
    /**
    Jobs are required to be published. Unpublished jobs are jobs that are missing key details such as email address or phone number. Jobs that are not published but created by the selected user is also displayed so that they can modify the job and make it publishable.
     */
    var sortedJobs: [Job] {
        let creator = Auth.auth().currentUser?.uid ?? ""
        let publishedJobs = allJobs.filter{ $0.isPublished }
        let unpublishedJobs = allJobs.filter { !$0.isPublished }
        let unpublishedJobsCreatedByUser = unpublishedJobs.filter { $0.creator_id == creator}
        return publishedJobs + unpublishedJobsCreatedByUser
    }
    
    var body: some View {
        NavigationView {
            VStack {
                List(sortedJobs) { job in
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
