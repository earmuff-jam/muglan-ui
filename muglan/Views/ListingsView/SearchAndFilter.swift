//
//  SearchAndFilter.swift
//  muglan
//
//  Created by Mohit Paudyal on 5/18/24.
//

import SwiftUI

struct SearchAndFilter: View {
    @Binding var searchInput: String
    
    var body: some View {
        HStack {
            Image(systemName: "magnifyingglass")
            
            VStack(alignment: .leading, spacing: 2) {
                if !searchInput.isEmpty {
                    TextField("Search...", text: $searchInput)
                        .font(.footnote)
                        .foregroundColor(.primary)
                } else {
                    VStack(alignment: .leading, spacing: 2) {
                        Text("Search...")
                            .font(.footnote)
                            .fontWeight(.semibold)
                        Text("Any jobs, location or employment...")
                            .font(.caption2)
                            .foregroundColor(.gray)
                    }
                }
            }
            Spacer()
            
            Button(action: /*@START_MENU_TOKEN@*/{}/*@END_MENU_TOKEN@*/, label: {
                Image(systemName: "line.3.horizontal.decrease.circle")
                    .foregroundStyle(.black)
            })
        }
        .padding(.horizontal)
        .padding(.vertical, 10)
        .overlay {
            Capsule()
                .stroke(lineWidth: 0.5)
                .foregroundStyle(Color(.gray))
                .shadow(color: /*@START_MENU_TOKEN@*/.black/*@END_MENU_TOKEN@*/.opacity(0.4), radius: 2)
            
        }
        .padding()
    }
}

#Preview {
    SearchAndFilter(searchInput: .constant(""))
}
