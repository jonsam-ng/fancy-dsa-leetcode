var getIntersectionNode = function (headA, headB) {
  if (!headA || !headB) return null;
  let pa = headA,
      pb = headB;

  while (pa !== pb) [pa, pb] = [pa ? pa.next : headB, pb ? pb.next : headA];

  return pa;
};
