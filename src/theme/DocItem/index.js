import React from 'react'
import DocItem from '@theme-original/DocItem'
import Comment from '../../components/HomepageFeatures/comment'

export default function DocItemWrapper(props) {
  return (
    <>
      <DocItem {...props} />
      <Comment />
    </>
  )
}
