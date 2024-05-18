//
//  SearchAndFilter.swift
//  muglan
//
//  Created by Mohit Paudyal on 5/18/24.
//

import SwiftUI

struct SearchAndFilter: View {
    var body: some View {
        HStack {
            Image(systemName: "magnifyingglass")
            
            VStack(alignment: .leading, spacing: 2) {
                Text("Search for jobs")
                    .font(.footnote)
                    .fontWeight(.semibold)
                Text("Any jobs")
                    .font(.caption2)
                    .foregroundStyle(.gray)
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
    SearchAndFilter()
}
