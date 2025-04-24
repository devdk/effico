import { Menu, Transition } from '@headlessui/react';
import { HiOutlineDotsVertical } from 'react-icons/hi';
import { useMutation, useQueryClient } from 'react-query';
import { deleteAPost } from 'services/post.service';
import {
  DeleteAPostMutation,
  DeleteAPostMutationVariables,
  Maybe,
  Post as PostType,
} from 'services/types/generated';
import useSession from 'src/hooks/useSession';
import ConfirmationModal from './ConfirmationModal';
import { useState } from 'react';
import { BsTrash } from 'react-icons/bs';

interface IPostOptionsDropdown {
  post?: Maybe<PostType>;
}

export default function PostOptionsDropdown({ post }: IPostOptionsDropdown) {
  const { session } = useSession();
  const [
    isDeletePostConfirmationModalOpen,
    setisDeletePostConfirmationModalOpen,
  ] = useState(false);

  const queryClient = useQueryClient();

  const { mutate: deletePost, isLoading } = useMutation<
    DeleteAPostMutation,
    unknown,
    DeleteAPostMutationVariables
  >(deleteAPost, {
    mutationKey: 'remove-like-on-a-post',
    onSettled: () => {
      queryClient.invalidateQueries(['feed']);
      queryClient.invalidateQueries(['author-posts']);
      queryClient.invalidateQueries(['venue']);
      queryClient.invalidateQueries(['creator']);
    },
  });

  const handlePostDelete = () => {
    deletePost({
      id: post?.id || '',
      pageId: post?.pageId || '',
    });
  };

  const isAuthor = session?.user?.sub === post?.author;

  return (
    <Menu>
      {({ open }) => (
        <div className="relative z-20">
          <ConfirmationModal
            title="Are you sure you want to delete your post?"
            description="This action is irreversible."
            icon={<BsTrash className="text-red-400" />}
            isOpen={isDeletePostConfirmationModalOpen}
            isLoading={isLoading}
            setIsOpen={setisDeletePostConfirmationModalOpen}
            closeOnConfirm={false}
            onConfirm={handlePostDelete}
          />
          <Menu.Button data-testid="post-dropdown-btn" className="">
            <HiOutlineDotsVertical className="text-xl" />
          </Menu.Button>
          <Transition
            show={open}
            enter="transition duration-100 ease-out"
            enterFrom="transform scale-95 opacity-0"
            enterTo="transform scale-100 opacity-100"
            leave="transition duration-75 ease-out"
            leaveFrom="transform scale-100 opacity-100"
            leaveTo="transform scale-95 opacity-0"
          >
            {/* Mark this component as `static` */}
            <Menu.Items
              static
              className="c-divide-300 c-box absolute top-full right-0 mt-4 w-full min-w-[240px] overflow-hidden rounded-xl border border-base-300 bg-base-100 shadow-2xl dark:border-dark-base-300 dark:bg-dark-base-100"
            >
              {isAuthor && (
                <Menu.Item>
                  <button
                    data-testid="delete-post-btn"
                    onClick={() => setisDeletePostConfirmationModalOpen(true)}
                    className="block w-full px-5 py-3 text-left cursor-pointer hover:bg-base-300 dark:hover:bg-dark-base-300"
                  >
                    <span className="font-medium color-heading ">
                      Delete this Post
                    </span>
                  </button>
                </Menu.Item>
              )}
              <Menu.Item>
                <div className="block px-5 py-3 cursor-pointer hover:bg-base-300 dark:hover:bg-dark-base-300">
                  <h3 className="font-medium color-heading ">
                    Mute Posts from {post?.authorDetails?.name || 'this User'}
                  </h3>
                </div>
              </Menu.Item>
              <Menu.Item>
                <div className="block px-5 py-3 cursor-pointer hover:bg-base-300 dark:hover:bg-dark-base-300">
                  <h3 className="font-medium color-heading ">
                    Report this Post
                  </h3>
                </div>
              </Menu.Item>
            </Menu.Items>
          </Transition>
        </div>
      )}
    </Menu>
  );
}
