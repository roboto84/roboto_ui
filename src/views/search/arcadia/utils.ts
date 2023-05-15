import {
  ArcResultPackage,
  ArcSearchResultPackage,
  ArcSearchResultsNode,
} from '@/views/search/arcadia/types/arcadiaTypes';

export function shouldDictionarySearch(term: string) {
  return term.indexOf('_') < 0 && term.match(/^[a-zA-Z]+$/);
}

export function organizeNodes(nodes: ArcSearchResultPackage) {
  const urlCache: string[] = [];
  const tagCache: string[] = [];

  if (nodes.mainNode) {
    nodes.mainNode.urls.forEach((url:ArcResultPackage) => {
      urlCache.push(url.data);
    });
  }

  let i = 0;
  while (i < nodes.subNode.length) {
    let j = 0;
    while (j < nodes.subNode[i].urls.length) {
      if (urlCache.indexOf(nodes.subNode[i].urls[j].data) > -1) {
        nodes.subNode[i].urls.splice(j, 1);
      } else {
        urlCache.push(nodes.subNode[i].urls[j].data);
        j += 1;
      }
    }
    if (nodes.subNode[i].urls.length === 0) {
      nodes.subNode.splice(i, 1);
    } else {
      tagCache.push(nodes.subNode[i].subject);
      i += 1;
    }
  }

  tagCache.sort((a: string, b: string) => a.localeCompare(b));
  if (nodes.subNode.length > 1) {
    nodes.subNode.sort(
      (a: ArcSearchResultsNode, b: ArcSearchResultsNode) => a.subject.localeCompare(b.subject),
    );
  }
  return { urlCache, tagCache };
}

export function openInNewTab(url: string) {
  window.open(url, '_blank').focus();
}

export const quickSearchSystems: {[key: string]: Function} = {
  ph(searchTerm: string) {
    return `https://www.phind.com/search?q=${searchTerm}&source=searchbox`;
  },
  g(searchTerm: string) {
    return `https://www.google.com/search?q=${searchTerm}`;
  },
  dd(searchTerm: string) {
    return `https://duckduckgo.com/?t=ffab&q=${searchTerm}&ia=web`;
  },
  w(searchTerm: string) {
    return `https://en.wikipedia.org/wiki/${searchTerm}`;
  },
  st(searchTerm: string) {
    return `https://store.steampowered.com/search/?term=${searchTerm}`;
  },
  r(searchTerm: string) {
    return `https://www.reddit.com/search/?q=${searchTerm}`;
  },
};
