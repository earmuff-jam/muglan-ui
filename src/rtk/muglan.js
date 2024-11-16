import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react';
import {setDefaultGroup} from '../app/reducer';

export const ENDPOINT = 'http://192.168.1.222:3000';

export const muglanApi = createApi({
  reducerPath: 'muglanApi',
  tagTypes: [
    'Dashboard',
    'Groups',
    'Categories',
    'User',
    'Chore',
    'GroupDetails',
    'GroupTypes',
    'Templates',
  ],
  baseQuery: fetchBaseQuery({
    baseUrl: ENDPOINT,
    prepareHeaders: async (headers, {getState}) => {
      const {base} = getState();
      const {user} = base;
      if (user) {
        headers.set('X-User-Identification-Id', user.id);
        headers.set('X-User-Auth-Token', user.authentication_token);
      }
      return headers;
    },
  }),
  endpoints: builder => ({
    signIn: builder.mutation({
      query: ({data}) => {
        return {
          url: '/api/sessions',
          method: 'POST',
          body: data,
        };
      },
    }),
    signUp: builder.mutation({
      query: ({data}) => ({
        url: 'api/users/sign_up',
        method: 'POST',
        body: data,
      }),
    }),
    acceptInvite: builder.mutation({
      query: ({data}) => ({
        url: 'api/users/accept_invitation',
        method: 'POST',
        body: data,
      }),
    }),
    personalInfoOnboarding: builder.mutation({
      query: ({data}) => ({
        url: 'api/onboarding/personal_information',
        method: 'PATCH',
        body: data,
      }),
    }),
    addressInformationOnboarding: builder.mutation({
      query: ({data}) => ({
        url: 'api/onboarding/address_information',
        method: 'PATCH',
        body: data,
      }),
    }),
    avatarUploadOnboarding: builder.mutation({
      query: ({data}) => {
        let formData = new FormData();
        formData.append('profile_picture', data.profile_picture);
        return {
          url: 'api/onboarding/avatar_upload',
          method: 'PATCH',
          body: formData,
          headers: {
            'Content-Type': 'multipart/form-data',
          },
          formData: true,
        };
      },
    }),
    getGroups: builder.query({
      query: () => '/api/groups',
      providesTags: ['Groups'],
    }),
    getGroupTypes: builder.query({
      query: () => '/api/group_types',
      providesTags: ['GroupTypes'],
    }),
    getCategories: builder.query({
      query: () => '/api/categories',
      providesTags: ['Categories'],
    }),
    createGroup: builder.mutation({
      query: ({data}) => ({
        url: 'api/groups',
        method: 'POST',
        body: data,
      }),
      invalidatesTags: ['Groups', 'Dashboard'],
    }),
    updateGroup: builder.mutation({
      query: ({data}) => ({
        url: `api/groups/${data.id}`,
        method: 'PATCH',
        body: data,
      }),
      invalidatesTags: ['Groups', 'GroupDetails'],
    }),
    updateCurrentSelection: builder.mutation({
      query: ({data}) => ({
        url: `api/groups/${data.id}/set_current_selection`,
        method: 'PATCH',
        body: data,
      }),
      invalidatesTags: ['Dashboard', 'Groups'],
    }),
    getDashboard: builder.query({
      query: () => '/api/dashboard',
      providesTags: ['Dashboard'],
      onQueryStarted: async (arg, {queryFulfilled, dispatch}) => {
        try {
          const result = await queryFulfilled;
          dispatch(setDefaultGroup(result.data.id));
        } catch (error) {
          console.log('error>>>', error);
        }
      },
    }),
    getTemplates: builder.query({
      query: ({group_type_id}) =>
        `/api/templates?group_type_id=${group_type_id}`,
      providesTags: ['Templates'],
    }),
    getNotifications: builder.query({
      query: () => '/api/push_notifications',
      providesTags: ['Notifications'],
    }),
    createChore: builder.mutation({
      query: ({data}) => ({
        url: '/api/chores',
        method: 'POST',
        body: data,
      }),
      invalidatesTags: ['Dashboard', 'Chore'],
    }),
    updateChore: builder.mutation({
      query: ({data}) => ({
        url: `/api/chores/${data.id}`,
        method: 'PATCH',
        body: data,
      }),
      invalidatesTags: ['Chore'],
    }),
    getChore: builder.query({
      query: id => `/api/chores/${id}`,
      providesTags: ['Chore'],
    }),
    getMyChores: builder.query({
      query: date => `/api/chores/my?date=${date}`,
      providesTags: ['Chore'],
    }),
    startChore: builder.mutation({
      query: ({id}) => ({
        url: `/api/chores/${id}/start`,
        method: 'PATCH',
      }),
      invalidatesTags: ['Dashboard', 'Chore'],
    }),
    deleteChore: builder.mutation({
      query: ({id}) => ({
        url: `/api/chores/${id}`,
        method: 'DELETE',
      }),
      invalidatesTags: ['Dashboard', 'Chore'],
    }),
    completeChore: builder.mutation({
      query: ({id}) => ({
        url: `/api/chores/${id}/complete`,
        method: 'PATCH',
      }),
      invalidatesTags: ['Dashboard', 'Chore'],
    }),
    addChecklistItem: builder.mutation({
      query: ({data}) => ({
        url: `/api/chores/${data.id}/checklist`,
        method: 'POST',
        body: data,
      }),
      invalidatesTags: ['Chore'],
    }),
    addAttachment: builder.mutation({
      query: ({data}) => {
        let formData = new FormData();
        formData.append('file', data.file);
        return {
          url: `/api/chores/${data.id}/attachments`,
          method: 'PATCH',
          body: formData,
          headers: {
            'Content-Type': 'multipart/form-data',
          },
          formData: true,
        };
      },
      invalidatesTags: ['Chore'],
    }),
    toggleChecklistItem: builder.mutation({
      query: ({data}) => ({
        url: `/api/chores/${data.id}/checklist/${data.checklist_id}`,
        method: 'PATCH',
        body: data,
      }),
      invalidatesTags: ['Chore'],
    }),
    deleteChecklistItem: builder.mutation({
      query: ({data}) => ({
        url: `/api/chores/${data.id}/checklist/${data.checklist_id}`,
        method: 'DELETE',
        body: data,
      }),
      invalidatesTags: ['Chore'],
    }),
    getUser: builder.query({
      query: () => '/api/users',
      providesTags: ['User'],
    }),
    updateUser: builder.mutation({
      query: ({data}) => {
        let formData = new FormData();
        formData.append('profile_picture', data.profile_picture);
        return {
          url: 'api/users',
          method: 'PATCH',
          body: formData,
          headers: {
            'Content-Type': 'multipart/form-data',
          },
          formData: true,
        };
      },
      invalidatesTags: ['User'],
    }),
    getGroupDetails: builder.query({
      query: id => `/api/groups/${id}`,
      providesTags: ['GroupDetails'],
    }),
    inviteUserToGroup: builder.mutation({
      query: ({data}) => ({
        url: `/api/groups/${data.id}/invite`,
        method: 'POST',
        body: data,
      }),
      invalidatesTags: ['Groups', 'GroupDetails'],
    }),
    deleteUserFromGroup: builder.mutation({
      query: ({data}) => ({
        url: `/api/groups/${data.id}/remove_user`,
        method: 'DELETE',
        body: data,
      }),
      invalidatesTags: ['Groups', 'GroupDetails'],
    }),
  }),
});

export const {
  useSignInMutation,
  useSignUpMutation,
  usePersonalInfoOnboardingMutation,
  useAddressInformationOnboardingMutation,
  useAvatarUploadOnboardingMutation,
  useGetGroupsQuery,
  useGetGroupTypesQuery,
  useCreateGroupMutation,
  useUpdateCurrentSelectionMutation,
  useGetDashboardQuery,
  useCreateChoreMutation,
  useUpdateChoreMutation,
  useGetUserQuery,
  useGetGroupDetailsQuery,
  useInviteUserToGroupMutation,
  useAcceptInviteMutation,
  useGetCategoriesQuery,
  useUpdateUserMutation,
  useAddChecklistItemMutation,
  useGetChoreQuery,
  useGetMyChoresQuery,
  useToggleChecklistItemMutation,
  useDeleteChecklistItemMutation,
  useStartChoreMutation,
  useCompleteChoreMutation,
  useDeleteUserFromGroupMutation,
  useUpdateGroupMutation,
  useAddAttachmentMutation,
  useDeleteChoreMutation,
  useGetTemplatesQuery,
  useGetNotificationsQuery,
} = muglanApi;